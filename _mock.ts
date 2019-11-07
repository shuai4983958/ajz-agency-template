import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/demo': (req: Request, res: Response) => {
    setTimeout(() => {
      const results = {
        code: 0,
        data: {
          pagination: {
            current: 0,
            pageSize: 0,
            total: 0,
          },
          result: [],
        },
        desc: '',
        msg: '',
        trace: '',
      };
      res.send(results);
    }, 1000);
  },
};
