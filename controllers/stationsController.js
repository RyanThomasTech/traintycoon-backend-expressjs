import Model from '/home/ryan/express/traintycoon/models/model.js';

const stationsModel = new Model('stations');
export const stationsPage = async (req, res) => {
    try {
        const data = await stationsModel.select(['id','name']);
        console.log(data);
        res.status(200).json({stations: data});
    }
    catch(err){
        res.status(200).json({stations: err.stack});
    }
};

export const addStation = async (req, res) => {
    const reqData = req.body;
    try {
        const data = await stationsModel.insertReturnRow(reqData);
        res.status(200).json({stations: data});
    }
    catch(err) {
        res.status(200).json({stations: err.stack});
    }
}