exports.create = async (req, res) => { 
    res.status(200).json({status:'success', data: "User Created Successfully!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:'success', data: "User Viewed Successfully!"});
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:'success', data: "User Deleted Successfully!"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:'success', data: "User Updated Successfully!"});
 };

