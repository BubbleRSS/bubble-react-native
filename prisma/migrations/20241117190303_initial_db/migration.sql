-- CreateTable
CREATE TABLE "Flavor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rssLink" TEXT NOT NULL,
    "iconLink" TEXT NOT NULL,
    "flavorId" INTEGER NOT NULL,
    CONSTRAINT "Tea_flavorId_fkey" FOREIGN KEY ("flavorId") REFERENCES "Flavor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LikedBubble" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teaId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,
    "postLink" TEXT NOT NULL,
    "publishedAt" DATETIME NOT NULL
);
