import { Router } from "express";
import { responseWrapper } from "../../middleware/responseWrapper.js";
import disbursementFileRouter from "./disbursement-file.routes.js";
import safeVaultRouter from "./safe-vault.routes.js";
import historyRouter from "./history.routes.js";
import invoiceReportRouter from "./invoice-report.routes.js";

const router = Router();

router.use(responseWrapper);
router.use(disbursementFileRouter);
router.use(safeVaultRouter);
router.use(historyRouter);
router.use(invoiceReportRouter);

export default router;
