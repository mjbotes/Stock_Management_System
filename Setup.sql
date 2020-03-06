IF EXISTS(select * from sys.databases where name='StockTracker')
DROP DATABASE StockTracker
Go

USE master
Go

Create Database StockTracker;
Go

Use StockTracker
Go

CREATE TABLE Users(
	UserID INT PRIMARY KEY IDENTITY(1, 1),
	Name VARCHAR(30),
	Email VARCHAR(30),
	Password VARCHAR(30),
	IsAdmin BIT DEFAULT(0)
);

CREATE TABLE Branches(
	BranchID INT PRIMARY KEY IDENTITY(1,1),
	BranchName VARCHAR(20) NOT NULL,
	BranchAddress VARCHAR(20),
	UserID INT FOREIGN KEY REFERENCES Users(UserID)
);

CREATE TABLE Categories(
	CategoryID INT PRIMARY KEY IDENTITY(1,1),
	CategoryName VARCHAR(20) NOT NULL
);

CREATE TABLE Manufacture(
	ManufactureID INT PRIMARY KEY IDENTITY(1, 1),
	Manufacture varchar(20)
);

CREATE TABLE Products(
	ProductID INT PRIMARY KEY IDENTITY(1,1),
	ProductName VARCHAR(20) NOT NULL,
	CategoryID INT FOREIGN KEY REFERENCES Categories(CategoryID),
	ManufactureID  INT FOREIGN KEY REFERENCES Manufacture(ManufactureID),
	WarehouseStockQuantity INT NOT NULL,
	Price INT NOT NULL
);

CREATE TABLE StoreStock(
	StoreStockID INT PRIMARY KEY IDENTITY(1,1),
	BranchID INT FOREIGN KEY REFERENCES Branches(BranchID),
	ProductID INT FOREIGN KEY REFERENCES Products(ProductID),
	Quantity INT NOT NULL DEFAULT(0),
);

CREATE TABLE Orders(
	OrderID	INT PRIMARY KEY IDENTITY(1,1),
	OrderDate DATE NOT NULL ,
	BranchID INT FOREIGN KEY REFERENCES Branches(BranchID),
	Status BIT DEFAULT(0)
);

CREATE TABLE OrderItems(
	OrderID	 INT FOREIGN KEY REFERENCES Orders(OrderID),
	ProductID INT FOREIGN KEY REFERENCES Products(ProductID),
	Quantity INT NOT NULL
);

CREATE TABLE BranchStock(
	ProductID INT FOREIGN KEY REFERENCES Products(ProductID),
	BranchID INT FOREIGN KEY REFERENCES Branches(BranchID),
	Quantity INT NOT NULL
);

GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Marnus
-- Create date: 4 March 202
-- Description:	Insert Products into the database
-- =============================================
CREATE PROCEDURE InsertProduct 
	@ManufactureName	varchar(20),
	@ProductName		varchar(20),
	@Catergory			int,
	@WarehouseStock		int,
	@Price				int
AS
BEGIN
	DECLARE @ManufactureID INT;
	DECLARE @ManufactureResults INT;
	SELECT @ManufactureResults = Count(*) FROM Manufacture WHERE Manufacture = @ManufactureName;
	if (@ManufactureResults = 0)
	BEGIN
		INSERT INTO [dbo].[Manufacture] ([Manufacture]) VALUES (@ManufactureName)
	END
	SELECT @ManufactureID = ManufactureID FROM Manufacture WHERE Manufacture = @ManufactureName;
	INSERT INTO Products (ProductName, ManufactureID, CategoryID, Price, WarehouseStockQuantity) VALUES (@ProductName, @ManufactureID, @Catergory, @Price, @WarehouseStock);
END
GO
-- =============================================
-- Author:		Marnus
-- Create date: 4 March 202
-- Description:	Insert Catergory into table and returns id
-- =============================================
CREATE PROCEDURE InsertCatergory 
	@CatergoryName	varchar(20)
AS
BEGIN
	DECLARE @CatergoryID INT;
	DECLARE @CatergoryResults INT;
	SELECT @CatergoryResults = Count(*) FROM Categories WHERE CategoryName = @CatergoryName;
	if (@CatergoryResults = 0)
	BEGIN
		INSERT INTO [dbo].[Categories] ([CategoryName]) VALUES (@CatergoryName)
	END
	SELECT @CatergoryID = CategoryID FROM Categories WHERE CategoryName = @CatergoryName;
	RETURN @CatergoryID
END
GO

Create View AllProductsView
AS 
	SELECT 
		Products.ProductID,
		Products.ProductName,
		Categories.CategoryName,
		Manufacture.Manufacture,
		Products.Price,
		Products.WarehouseStockQuantity 
	FROM 
		Products
	INNER JOIN
		Manufacture
		ON
			Products.ManufactureID = Manufacture.ManufactureID
	INNER JOIN
		Categories
		ON
			Products.CategoryID = Categories.CategoryID
GO

CREATE PROCEDURE AddCustomerProcedure 
	@Email VARCHAR(30),
	@Name VARCHAR(30),
	@Password VARCHAR(30)
AS
	INSERT INTO Users (Name, Email, Password)  VALUES (@Name, @Email, @Password)
GO

