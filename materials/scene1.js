{
    "eye": [ 0 , 0, 20 ],
    "lookat": [0, 0, 0 ],
    "up": [0,1,0],
    "fov_angle": 50,
	"near": 1,
	"far": 30,
    "DefaulColor":[1.0,0.9,0.9],
    "SunLocation":[-2,0.7,7],
    "obj": 
    {
        "type":"obj",
        "position": [4,0,3],
        "filename": "obj1.obj"
    },
    "billboard":
    {
        "type":"billboards",
        "UpperLeft": [1, 4 , 1], 
        "LowerLeft": [1 , 1, 1], 
        "UpperRight": [4 , 4, 2],
        "filename": "f-texture.png"
    }, 
	"mirror":{
		"type":"billboards",
        "UpperLeft": [-9, 9 , 0], 
        "LowerLeft": [-9 , -9, 0], 
        "UpperRight": [9 , 9, 0]
	}
}