# Generates HTML for projects section based on projects.yaml
import yaml
def getTag(tag):
    if tag == 'Swift':
        return ' <span class="badge badge-pill badge-swift">Swift</span>'
    elif tag == "Objective-C":
        return ' <span class="badge badge-pill badge-obj-c">Objective-C</span>'
    elif tag == 'Javascript':
        return ' <span class="badge badge-pill badge-javascript">Javascript</span>'
    elif tag == 'Python':
        return ' <span class="badge badge-pill badge-python">Python</span>'
    elif tag == 'CSS':
        return ' <span class="badge badge-pill badge-css">CSS</span>'
    elif tag == 'HTML':
        return ' <span class="badge badge-pill badge-html">HTML</span>'
    elif tag == "MaterializeCSS":
        return ' <span class="badge badge-pill badge-materialize-css">MaterializeCSS</span>'
    elif tag == 'Google Apps Scripts':
        return ' <span class="badge badge-pill badge-google-apps-scripts">Google Apps Scripts</span>'
    elif tag == 'Java':
        return ' <span class="badge badge-pill badge-java">Java</span>'
    elif tag == 'Wrote 1000+ lines of code':
        return ' <span class="badge badge-pill badge-info">1000+ lines of code</span>'
    return ''


result = ""
stream = open("projects.yaml", 'r')
dictionaries = yaml.load_all(stream)
for d in dictionaries:
    result+= r'<div class="flex-row row project'
    for category in d['categories']:
        result += " " + str(category)
    result+= r'">'
    result+= r'<div class="flex-column col-sm-12 col-lg-8">'
    result+= r'<p class="text-center">' + d['title'] + '</p>'
    result+= d['image']
    result+= '</div>'
    result+= r'<div class="col-sm-12 col-lg-4 text-center d-flex flex-column">'
    result+= r'<p>' + d['description'] + '</p>'
    result+= r'<div class="mt-auto">'
    if 'note' in d:
        result+= r'<h5>' + d['note'] + '</h5>'
    for tag in d['tags']:
        result+= getTag(tag)
    result+= '</div></div>'
    result+= '<div class="container"><div><hr/></div></div></div>'
print(result)



    
                    
                    
                    
                    
                    