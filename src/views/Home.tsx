function Home() {
    const [count, setCount] = useState(0)
    return (
        <div className='text-white'>
            <header className="text-white">
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                </p>
            </header>
        </div>
    )
}
export default Home