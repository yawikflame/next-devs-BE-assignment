import express from "express";
import { AlertsController } from "../modules/alerts/alerts.controller";
import { AlertsService } from "../modules/alerts/alerts.service";

const app = express();

const alertsController = new AlertsController(new AlertsService);

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/alerts', alertsController.getAlerts)

export = app;