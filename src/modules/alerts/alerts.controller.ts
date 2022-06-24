import { AlertsService } from "./alerts.service";

export class AlertsController {
  constructor(private readonly alertsService: AlertsService) { }

  getAlerts = async (req, res) => {
    return this.alertsService.getAlerts(req, res);
  }

}