import imageminMozjpeg from 'imagemin-mozjpeg';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';



(async () => {
	await imagemin(['./src/assets/images/*.jpg'], {
		destination: 'build/images',
		plugins: [
			imageminMozjpeg()
		]
	});

	console.log('Images optimized');
})();