CREATE TABLE [RECEPCIONDEEQUIPOS].[dbo].[Recepción] (
    [Fecha] DATE,
    [No.Inventario] INT,
    [No.Serie] VARCHAR(50),
    [DescripciondelEquipo] VARCHAR(255),
    [Marca] VARCHAR(100),
    [Moldelo] VARCHAR(100),
    [AccesoriosEntregados] VARCHAR(255),
    [Contraseñas] VARCHAR(255),
    [DeparOrigen] VARCHAR(100),
    [Ext] VARCHAR(10),
    [PerRecibe] VARCHAR(100),
    [PerReFirma] VARCHAR(100),
    [PerEntrega] VARCHAR(100),
    [PerEnFirma] VARCHAR(100),
    [Falla] VARCHAR(255)
);

CREATE TABLE [RECEPCIONDEEQUIPOS].[dbo].[Diagnostico] (
    [Fecha] DATE,
    [No.Inventario] INT,
    [No.Serie] VARCHAR(50),
    [DescripciondelEquipo] VARCHAR(255),
    [Marca] VARCHAR(100),
    [Modelo] VARCHAR(100),
    [No.Folio] INT,
    [Diagnostico] VARCHAR(255),
    [Solucion] VARCHAR(255),
    [Autoriza] VARCHAR(100),
    [NoAutoriza] VARCHAR(100),
    [Nombre] VARCHAR(100),
    [Firma] VARCHAR(100)
);

CREATE TABLE [RECEPCIONDEEQUIPOS].[dbo].[Devolucion] (
    [No.Inventario] INT,
    [No.Serie] VARCHAR(50),
    [Marca] VARCHAR(100),
    [Modelo] VARCHAR(100),
    [Fecha] DATE,
    [AccesoriosEntregados] VARCHAR(255),
    [Solucion] VARCHAR(255),
    [PersonaEntregaD] VARCHAR(100),
    [PersonaRecibeD] VARCHAR(100),
    [FirmaEntreD] VARCHAR(100),
    [FirmeRecD] VARCHAR(100)
);
INSERT INTO [RECEPCIONDEEQUIPOS].[dbo].[Recepción] 
    ([Fecha], [No.Inventario], [No.Serie], [DescripciondelEquipo], [Marca], [Moldelo], [AccesoriosEntregados], [Contraseñas], [DeparOrigen], [Ext], [PerRecibe], [PerReFirma], [PerEntrega], [PerEnFirma], [Falla])
VALUES 
    ('2025-02-25', '12345', 'SN123456', 'Laptop', 'Dell', 'XPS 13', 'Charger, Bag', 'password123', 'IT Department', '1234', 'John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Screen flickering');

SELECT [Fecha], [No.Inventario], [No.Serie], [DescripciondelEquipo], [Marca], [Moldelo], [AccesoriosEntregados], [Contraseñas], [DeparOrigen], [Ext], [PerRecibe], [PerReFirma], [PerEntrega], [PerEnFirma], [Falla]
FROM [RECEPCIONDEEQUIPOS].[dbo].[Recepción]
WHERE [No.Inventario] = '12345' AND [No.Serie] = 'SN123456';