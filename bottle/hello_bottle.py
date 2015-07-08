from bottle import route, run, template

@route('/hello/<name>') #where it will listen from
def index(name):
    return template('<b>Hello {{name}}</b>!', name=name) #return this tmp

run(host='localhost', port=8080)
#run web server and listen on it