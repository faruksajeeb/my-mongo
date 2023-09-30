exports.create = async (req, res) => { 
    res.status(200).json({status:'success', data: "Post Created Successfully!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:'success', data: "Post Viewed Successfully!"});
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:'success', data: "Post Deleted Successfully!"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:'success', data: "Post Updated Successfully!"});
 };

