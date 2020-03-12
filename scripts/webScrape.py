import bs4
from bs4 import BeautifulSoup as soup 
from urllib.request import urlopen as uReq 

my_url = "https://unsplash.com/wallpapers/religion/christian"

# opening up the connection , grabbing the pag
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

#html parsing
page_soup  = soup(page_html, "html.parser")

#Grabs Each product 
products = page_soup.findAll("div",{"class":"nDTlD"})
#class="nDTlD" 

print(products)
for i in products:
    print(i)