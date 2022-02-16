import express from 'express';
import path from 'path';
import { cwd } from 'process';
import {createServer} from 'http';

const app = express();
const http = createServer(app);
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', function(req, res){
	res.sendFile(path.join(process.cwd(), 'public/html/index.html'));
});

app.get('/datePlanner', function(req, res){
	res.sendFile(path.join(process.cwd(), 'public/html/datePlanner.html'));
});

app.get('/create', function(req, res){
	res.sendFile(path.join(process.cwd(), 'public/html/create.html'));
});

http.listen(3000, function(){
	console.clear();
  console.log('listening on port 3000');
});




