import Model from '/home/ryan/express/traintycoon/models/model.js';

const stationsModel = new Model('stations');
export const stationsPage = async (req, res) => {
    try {
        const data = await stationsModel.select('name');
        console.log(data);
        res.status(200).json({stations: data.rows});
    }
    catch(err){
        res.status(200).json({stations: err.stack});
    }
};