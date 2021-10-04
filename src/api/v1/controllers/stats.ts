import { Request, Response } from 'express';
import { getStats } from '../services/stats';

export const getAllStatistics = async (req: Request, res: Response) => {
  try {
    const allStats = await getStats();
    return res.status(200).json({
      success: true,
      message: 'Fetched statistics successfully!',
      data: {
        drivers: allStats.drivers,
        taxis: allStats.taxis,
        stations: allStats.stations,
        places: allStats.places,
        complaints: allStats.complaints,
      },
    });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Failed retrieving statistics' });
  }
};
