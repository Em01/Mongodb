use agg
db.products.aggregate([
	{$group:
		{
			_id: {
				"category":
			}
		}}])