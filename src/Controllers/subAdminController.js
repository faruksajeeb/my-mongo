exports.create = async (req, res) => { 
    res.status(200).json({status:'success', data: "Sub Admin Created Successfully!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:'success', data: "Sub Admin Viewed Successfully!"});
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:'success', data: "Sub Admin Deleted Successfully!"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:'success', data: "Sub Admin Updated Successfully!"});
 };

