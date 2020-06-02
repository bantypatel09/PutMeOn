from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
import json
from time import sleep


class image_extractor():

    def __init__(self):
       self.driver = webdriver.Chrome('/Users/advithchegu/Desktop/Random Code/PutMeOn/src/other/chromedriver')

    def extract(self):
        #links = open('links.json', 'w')
        parent = 'https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826'
        links = [parent + '/outkast-aquemini-2-155441/', 
                parent + '/jackson-browne-for-everyman-38302/', 
                parent + '/the-temptations-anthology-152489/', 
                parent + '/the-yardbirds-roger-the-engineer-a-k-a-over-under-sideways-down-46344/',
                parent + '/black-sabbath-master-of-reality-32210/',
                parent + '/jay-z-reasonable-doubt-3-170429/',
                parent + '/ac-dc-highway-to-hell-2-161525/',
                parent + '/bruce-springsteen-darkness-on-the-edge-of-town-162503/',
                parent + '/the-zombies-odessey-and-oracle-172848/',
                parent + '/little-richard-heres-little-richard-165415/']
        img_dict = {}
        count = 0
        f = open('output.txt', 'a')
        for i in range(10):
            self.driver.get(links[i])
            article = self.driver.find_element_by_class_name('c-list--albums')
            img_tags = article.find_elements_by_tag_name('img')
            for i in img_tags:
                self.driver.execute_script("arguments[0].scrollIntoView();", i)
                while('https://www.rollingstone.com/wp-content/uploads' not in i.get_attribute('src')):
                    sleep(0.05)
                img_dict.update({str(count) : i.get_attribute('src')})
                count += 1
        f.write(json.dumps(img_dict))


if __name__ == "__main__":
    bot = image_extractor()
    bot.extract()

