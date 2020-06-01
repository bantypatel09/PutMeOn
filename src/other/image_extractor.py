from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
import json


class image_extractor():

    def __init__(self):
       self.driver = webdriver.Chrome('/Users/advithchegu/Desktop/Random Code/PutMeOn/other/chromedriver')

    def extract(self):
        #links = open('links.json', 'w')
        self.driver.get('https://www.billboard.com/photos/6715351/best-album-covers-of-all-time')
        article = self.driver.find_element_by_class_name('article__content-well')
        img_tags = article.find_elements_by_class_name('gallery-item__image')
        img_dict = {}
        count = 0
        for i in img_tags:
            img_dict.update({str(count) : i.get_attribute('src')})
            count += 1
        print(img_dict)


if __name__ == "__main__":
    bot = image_extractor()
    bot.extract()

