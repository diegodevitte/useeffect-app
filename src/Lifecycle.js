import React, { useState, useEffect } from 'react'
console.log('Pre-render');

const Lifecycle = () => {
    console.log('Logic render');
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);


    ////// los useEffect se van a ejecutar en el orden escrito
    useEffect(() => {
        // no tiene dependencias
        // se ejecutara una vez al renderizar el componente
        // y cada vez que haya un cambio en cualquier state del componente
        console.log('useEffect no dependency');
        return () => {
            // se ejecuta como limpieza del componente
            console.log('cleanup useEffect no dependency');
        }
    })

    useEffect(() => {
        // tiene un array vacio de dependecias
        // se ejecutara una vez al renderizar el componente
        // y no se ejecutara cada vez que se re renderice
        console.log('useEffect []');
        return () => {
            console.log('cleanup useEffect []');
        }
    }, [])

    useEffect(() => {
        // tiene un state de dependecias
        // se ejecutara una vez al renderizar el componente
        // y se volvera a ejecutar cada vez que haya un cambio en el state pasado como dependecia
        console.log('useEffect [counter1]');
        return () => {
            console.log('cleanup useEffect [counter1]');
        }
    }, [counter1])

    useEffect(() => {
        // tiene un state de dependecias
        // se ejecutara una vez al renderizar el componente
        // y se volvera a ejecutar cada vez que haya un cambio en el state pasado como dependecia
        console.log('useEffect [counter2]');
        return () => {
            console.log('cleanup useEffect [counter2]');
        }
    }, [counter2])

    useEffect(() => {
        // tiene 2 state de dependecias
        // se ejecutara una vez al renderizar el componente
        // y se volvera a ejecutar cada vez que haya un cambio 
        // en alguno de los state pasado como dependecia
        console.log('useEffect [counter1, counter2]');
        return () => {
            console.log('cleanup useEffect [counter1, counter2]');
        }
    }, [counter1, counter2])

    return (
        <div>
            {console.log('return render')}
            <h1>Clicks c1: {counter1}</h1>
            <button onClick={() => setCounter1(counter1 + 1)}>Increment c1</button>
            <h1>Clicks c2: {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)}>Increment c2</button>
        </div>
    )
}

export default Lifecycle