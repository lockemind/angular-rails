class Post < ActiveRecord::Base
	has_many :comments

	# override the as_json method so that all json 
	# representations of our posts will include the comments.
	def as_json(options = {})
	  super(options.merge(include: :comments))
	end
end
