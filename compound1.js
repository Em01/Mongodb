use agg
db.products.aggregate([
	{$group:
		{
			_id: {
				"manufacturer":"$manufacturer",
				"category" : "$category"},
			num_products:{$sum:1}
		}
	}
])

//aggregating to get the sum of all the different groupings
	