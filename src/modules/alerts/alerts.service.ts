import { PrismaClient } from "@prisma/client";

export class AlertsService {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient();
  }


  getAlerts = async (req, res) => {
    try {
      const alerts = await this.prisma.alert.findMany();
      return res.send(alerts);
    } catch (error) {
      console.log(error);
    }
  }
}