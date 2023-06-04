CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(10000),
	"description" VARCHAR(300) NOT NULL,
	"likes" int DEFAULT 0
);
 INSERT INTO gallery ("path","description","likes")
 VALUES( 'images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0 );