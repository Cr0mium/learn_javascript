import os
from PIL import Image
import shutil


def get_date_taken(path):
    r = Image.open(path).getexif();
    # print (r)
    if 36867 not in r.keys():
        return '0000:00'
    else:
        r = r[36867].split(" ");
        # print(r)
        return r[0];


# print(month);
cwd = os.getcwd();
cwd += "/pics_to_sort/"
for file in os.listdir(cwd):
    # if(str(file).endswith(".JPG") or str(file).endswith(".JPEG") or str(file).endswith(".jpg") or str(file).endswith(".jpeg")):
        # print(file)
        # print(cwd)
        if(file.endswith('.JPG') or file.endswith('jpg') or file.endswith('jpeg') or file.endswith('JPEG')):
            x = (get_date_taken(str(cwd) + str(file)));
            x = x.split(':')
#        print (x)
            if x[0]=='0000':
                path = cwd+'dates_unavailable/';
            else:
                path = os.path.join(cwd, x[0], x[1]);
            if(not os.path.isdir(path)):
                os.makedirs(path, exist_ok = True)
            filepath=cwd+str(file)
            if(os.path.isfile(filepath)):
                os.replace(filepath,path +'/'+ str(file));

# print(month);
