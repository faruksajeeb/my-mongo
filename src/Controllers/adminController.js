exports.create = async (req, res) => { 
    res.status(200).json({status:'success', data: "Admin Created Successfully!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:'success', data: "Admin Viewed Successfully!"});
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:'success', data: "Admin Deleted Successfully!"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:'success', data: "Admin Updated Successfully!"});
 };

