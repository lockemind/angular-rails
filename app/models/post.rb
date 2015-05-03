class Post < ActiveRecord::Base
	
	has_many :comments
	
	belongs_to :user

	# override the as_json method so that all json 
	# representations of our posts will include the comments.
	# def as_json(options = {})
	#   super(options.merge(include: :comments))
	# end
	def as_json(options = {})
	    super(options.merge(include: [:user, comments: {include: :user}]))
	  end
end