-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "coordinates" JSONB NOT NULL,
    "id_business" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business" (
    "id" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "ownerDocument" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "tradingName" TEXT NOT NULL,
    "specifications" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "stats" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id_business" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_id_business_fkey" FOREIGN KEY ("id_business") REFERENCES "business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_id_business_fkey" FOREIGN KEY ("id_business") REFERENCES "business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
