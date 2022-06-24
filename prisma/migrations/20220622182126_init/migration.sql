-- CreateTable
CREATE TABLE "WatchedCurrency" (
    "id" TEXT NOT NULL,
    "BaseCurrency" TEXT NOT NULL,
    "ExchangedCurrency" TEXT NOT NULL,
    "Threshold" TEXT NOT NULL,

    CONSTRAINT "WatchedCurrency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "Timestamp" TIMESTAMP(3) NOT NULL,
    "BaseCurrency" TEXT NOT NULL,
    "ExchangedCurrency" TEXT NOT NULL,
    "ValueToDate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);
