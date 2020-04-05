import React, { useState, useEffect } from 'react';
import Table from '../table';

function Board() {
  const [mineGrid, setIsHidden] = useState(null);
  const [hideGrid, setIsMine] = useState(null);

  let columns = [];
  let data = [];

  return <Table columns={columns} data={data}></Table>;
}

export default Board;
