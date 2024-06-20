const predict = async (req, res) => {
    console.log('recibido');
    const { image } = req.body;
    const modelURL = 'URL a tu modelo de Teachable Machine';
    const response = await fetch(modelURL, {
        method: 'POST',
        body: JSON.stringify({ image }),
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    res.json(data);
}

module.exports= {
    predict
}