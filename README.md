# MUNDI

## Prueba técnica Sr FE

### Tiempo estimado de resolución: `20 minutos`

Al finalizar el challenge se debe pushear a una nueva rama que se `challenge/[nombre del entrevistado]`

`Se debe utilizar las buenas prácticas de ECMAscript y principios SOLID.`

A partir del siguiente objeto se requiere:

Objeto inicial

```
const transportOptions = {
  data: {
    car: { amount: 100, description: 'Car' },
    bus: { amount: 50, description: 'Bus' },
    bike: { amount: 10, description: 'Bicycle' },
    airplane: { amount: 500, description: 'Airplane' },
    helicopter: { amount: 200, description: 'Helicopter' },
    boat: { amount: 200, description: 'Boat' },
    ship: { amount: 400, description: 'Ship' },
    yacht: { amount: 1000, description: 'Yacht' }
  },
  transportType: {
    car: 'land',
    bus: 'land',
    bike: 'land',
    airplane: 'air',
    helicopter: 'air',
    boat: 'maritime',
    ship: 'maritime',
    yacht: 'maritime'
  }
}

```

Objeto esperado

```
  transportOptionsFormatted = {
    "data": {
        "car": {
            "amount": 100,
            "description": "Car",
            "type": "land"
        },
        "bus": {
            "amount": 50,
            "description": "Bus",
            "type": "land"
        },
        "bike": {
            "amount": 10,
            "description": "Bicycle",
            "type": "land"
        },
        "airplane": {
            "amount": 500,
            "description": "Airplane",
            "type": "air"
        },
        "helicopter": {
            "amount": 200,
            "description": "Helicopter",
            "type": "air"
        },
        "boat": {
            "amount": 200,
            "description": "Boat",
            "type": "maritime"
        },
        "ship": {
            "amount": 400,
            "description": "Ship",
            "type": "maritime"
        },
        "yacht": {
            "amount": 1000,
            "description": "Yacht",
            "type": "maritime"
        }
    },
    "keys": [
        "car",
        "bus",
        "bike",
        "airplane",
        "helicopter",
        "boat",
        "ship",
        "yacht"
    ],
    "transportType": Listado de "LAND, AIR, MARITIME"
}
```

1- Formatear el objeto inicial y dejarlo como el esperado:

- `data`: Por cada transporte se debe identificar que tipo de transporte es (land, air, maritime) por medio de una prop `type`.

- `keys`: key de cada transporte.

- `transportType`: Listado de cada tipo de transporte aplicando upperCase.

2- Se debe mostrar junto a `"Tipos de medio de transporte":` en string `"LAND - AIR - MARITIME"`

3- El componente Select debe mostrar cada transporte y permitir seleccionarlo.

4- Por medio del transporte seleccionado se debe mostrar un `<li>` con cada key: value:

5- Se debe agregar al buton 'limpiar', la funcionalidad de eliminar el seleccionado.

Resultado esperado:
![alt text](image.png)
