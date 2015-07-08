
import bottle
import pymongo

#this is the handler for the default part of the web server

@bottle.route('/')
def index():

		#connect to mongoDB
		connection = pymongo.MongoClient('localhost', 27017)

		#attach to the test database
		db = connection.test

		#get handle for names collection
		name = db.names

		#find a single document
		item = name.find_one()

		return '<b>Hello %s!</b>' % item['name'] #pulling out value for the names key

bottle.run(host='localhost', port=8082)