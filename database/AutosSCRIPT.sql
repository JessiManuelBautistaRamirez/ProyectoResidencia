USE [Autos]
GO
/****** Object:  Table [dbo].[CarsGent]    Script Date: 09/10/2024 09:50:11 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarsGent](
	[idCarsGent] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](20) NULL,
	[Modelo] [varchar](20) NULL,
	[Transmision] [varchar](20) NULL,
	[Color] [varchar](10) NULL,
	[Kilometraje] [numeric](18, 2) NULL,
	[Motor] [float] NULL,
	[Carroseria] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[idCarsGent] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 09/10/2024 09:50:11 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[ClientesID] [int] IDENTITY(1,1) NOT NULL,
	[FechadeSolicitud] [varchar](100) NULL,
	[NombredelSolicitante] [varchar](100) NULL,
	[EstadoCivil] [varchar](50) NULL,
	[FechadeNacimiento] [varchar](20) NULL,
	[Telefono] [varchar](15) NULL,
	[Direccion] [varchar](30) NULL,
	[EmpresaDondeLabora] [varchar](100) NULL,
	[PuestoQueDesempeña] [varchar](100) NULL,
	[IngresosMensuales] [decimal](15, 2) NULL,
	[TiempoLaborando] [varchar](30) NULL,
	[CuentaconCompravantedeIngresos] [char](1) NULL,
PRIMARY KEY CLUSTERED 
(
	[ClientesID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Empleados]    Script Date: 09/10/2024 09:50:11 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Empleados](
	[idempleado] [int] NULL,
	[Nombre] [varchar](20) NULL,
	[Apellido] [varchar](30) NULL,
	[Edad] [numeric](2, 0) NULL,
	[Telefeno] [numeric](10, 0) NULL,
	[Direccion] [varchar](100) NULL,
	[Fecha_Nacimiento] [date] NULL,
	[Salario] [decimal](18, 2) NULL,
	[Activo] [char](2) NULL
) ON [PRIMARY]
GO
