exports.createStore = async (req, res) => {
    const { name, email, address } = req.body;
    const owner_id = req.user.id; // from auth middleware
  
    try {
      const [result] = await db.query(
        'INSERT INTO stores (name, email, address, owner_id) VALUES (?, ?, ?, ?)',
        [name, email, address, owner_id]
      );
      res.status(201).json({ store_id: result.insertId, name, email, address, owner_id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add store' });
    }
  };
  