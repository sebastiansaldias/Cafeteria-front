import React, { useState, useEffect } from 'react';

function NuevoCoffe() {
    const [coffees, setCoffees] = useState([]);
    const [coffeeName, setCoffeeName] = useState('');
    const [coffeeDescription, setCoffeeDescription] = useState('');
    const [coffeePrice, setCoffeePrice] = useState('');
    const [coffeeImage, setCoffeeImage] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editCoffeeId, setEditCoffeeId] = useState(null);

    const accessToken = localStorage.getItem('token');
    const API_URL = "http://localhost:8080";

    async function getCoffees() {
        try {
            const response = await fetch(`${API_URL}/api/coffee/get`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
            }

            const data = await response.json();
            setCoffees(data);
        } catch (error) {
            console.error('ERROR al obtener los Coffees:', error);

            if (error.message.includes('<!DOCTYPE html>')) {
                console.error('La respuesta es HTML, no JSON. Revisa la URL y el servidor.');
            } else {
                console.error('ERROR al obtener los Coffees:', error.message);
            }
        }
    }

    useEffect(() => {
        getCoffees();
    }, [API_URL, accessToken]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoffeeImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setCoffeeName(value);
        else if (name === 'description') setCoffeeDescription(value);
        else if (name === 'price') setCoffeePrice(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCoffee = {
            name: coffeeName,
            description: coffeeDescription,
            price: Number(coffeePrice),
            image64: coffeeImage
        };

        try {
            const response = await fetch(`${API_URL}/api/coffee/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(newCoffee)
            });

            if (response.ok) {
                getCoffees();
                setCoffeeName('');
                setCoffeeDescription('');
                setCoffeePrice('');
                setCoffeeImage(null);
                console.log('Coffee creado correctamente');
            } else {
                console.error('Error al crear el nuevo Coffee:', response.statusText);
            }
        } catch (error) {
            console.error('ERROR al crear el nuevo Coffee:', error);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();

        const updatedCoffee = {
            name: coffeeName,
            description: coffeeDescription,
            price: Number(coffeePrice),
            image64: coffeeImage
        };

        try {
            const response = await fetch(`${API_URL}/api/coffee/${editCoffeeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(updatedCoffee)
            });

            if (response.ok) {
                setCoffeeName('');
                setCoffeeDescription('');
                setCoffeePrice('');
                setCoffeeImage(null);
                setEditMode(false);
                setEditCoffeeId(null);
                console.log('Coffee editado correctamente');
                getCoffees();
            } else {
                console.error('Error al actualizar el Coffee:', response.statusText);
            }
        } catch (error) {
            console.error('ERROR al actualizar el Coffee:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${API_URL}/api/coffee/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                getCoffees();
                console.log('Coffee eliminado correctamente');
            } else {
                console.error('Error al borrar el Coffee:', response.statusText);
            }
        } catch (error) {
            console.error('ERROR al borrar el Coffee:', error);
        }
    };

    const handleEditClick = (coffee) => {
        setCoffeeName(coffee.name);
        setCoffeeDescription(coffee.description);
        setCoffeePrice(coffee.price);
        setEditMode(true);
        setEditCoffeeId(coffee.idCoffee);
    };

    return (
        <div className="container mx-auto px-5 py-24">
            <h1 className="text-2xl font-bold text-center mb-8">
                {editMode ? 'Editar Coffee' : 'Nuevo Coffee'}
            </h1>
            <form onSubmit={editMode ? handleEdit : handleSubmit} className="max-w-md mx-auto mb-8">
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={coffeeName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Nombre del café"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Descripción</label>
                    <input
                        type="text"
                        name="description"
                        value={coffeeDescription}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Descripción del café"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Precio</label>
                    <input
                        type="text"
                        name="price"
                        value={coffeePrice}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Precio del café"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Foto</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="w-full px-3 py-2 border rounded"
                        accept="image/*"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded">
                    {editMode ? 'Finalizar edición' : 'Crear'}
                </button>
            </form>

            <table className="table-auto w-full bg-white shadow-md rounded mb-8">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Descripción</th>
                        <th className="px-4 py-2">Precio</th>
                        <th className="px-4 py-2">Foto</th>
                        <th className="px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {coffees.map((coffee, index) => (
                        <tr key={coffee.idCoffee}>
                            <td className="border px-4 py-2">{coffee.idCoffee}</td>
                            <td className="border px-4 py-2">{coffee.name}</td>
                            <td className="border px-4 py-2">{coffee.description}</td>
                            <td className="border px-4 py-2">{coffee.price}</td>
                            <td className="border px-4 py-2">
                                {coffee.image64 ? (
                                    <img src={coffee.image64} alt={coffee.name} className="h-12 w-12 object-cover" />
                                ) : (
                                    'Sin imagen'
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleEditClick(coffee)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(coffee.idCoffee)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NuevoCoffe;
