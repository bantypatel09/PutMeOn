from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
import json


class image_extractor():

    def __init__(self):
       self.driver = webdriver.Chrome('/Users/advithchegu/Desktop/Random Code/PutMeOn/src/other/chromedriver')

    def extract(self):
        #links = open('links.json', 'w')
        self.driver.get('https://www.udiscovermusic.com/stories/the-100-greatest-album-covers/')
        article = self.driver.find_element_by_id('mvp-content-main')
        img_tags = article.find_elements_by_tag_name('img')
        img_dict = {}
        count = 51
        for i in img_tags:
            img_dict.update({str(count) : i.get_attribute('src')})
            count += 1
        print(img_dict)


if __name__ == "__main__":
    bot = image_extractor()
    bot.extract()

