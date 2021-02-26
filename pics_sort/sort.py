import os
from PIL import Image
import shutil


def get_date_taken(path):
    r = Image.open(path).getexif()[36867];
    r = r.split(" ");
    return r[0];


# print(month);
cwd = os.getcwd();
cwd += "/pics_to_sort/"
for file in os.listdir(cwd):
    x = (get_date_taken(str(cwd) + str(file)));
    x = x.split(':')
#    print (x)
    path = os.path.join(cwd, x[0], x[1]);
    if(not os.path.isdir(path)):
        os.makedirs(path, exist_ok = True)
    filepath=cwd+str(file)
    if(os.path.isfile(filepath)):
        os.replace(filepath,path +'/'+ str(file));

# print(month);
