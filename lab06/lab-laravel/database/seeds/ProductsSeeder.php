<?php

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       	DB::table('products')->insert([
       		'name' => 'LG',
       		'description' => 'Protection Corning Gorilla Glass 4. MISC Colors
			Space Black, Luxe White, Modern Beige, Ocean Blue, Opal Blue.',
			'photo' => 'https://i.ebayimg.com/00/s/NjQxWDQyNA==/z/VDoAAOSwgk1XF2oo/$_35.JPG?set_id=89040003C',
			'price' => 3999.00
       	]);

       	DB::table('products')->insert([
       		'name' => 'Sony PS4',
       		'description' => 'Sie bieten hier auf eine Playstation 4 Konsole. Es handelt sich dabei um das PS4-Komplettset mit 500GB. Zu dieser wird das notwendige Zubehör geliefert (siehe Liste unten). Dabei ist unter anderem ein NEUES, kabelgebundenes Subsonic Pro 4 Gamepad- also einfach auspacken und loslegen.',
			'photo' => 'https://cdn.eazyauction.de/b8/b87296f4b89207f3bf6f65d2e6b3f12372ae0a33c299b484591cf1028f5eb54e61ad7a68b68148f81e0f5c7695d12aae/img/750x563_86d5d862080a529d32a3acb440e9e45df0f3f545.jpeg',
			'price' => 3000.00
       	]);

       	DB::table('products')->insert([
       		'name' => 'Sony LED Smart TV',
       		'description' => 'It has been cleaned, sanitized, tested and verified that it works. There are a few scratches and marks. Please see pictures for details. Requires 2 AAA Batteries (not included)',
			'photo' => 'https://i.ebayimg.com/images/g/GL0AAOSwvxBeq0Ml/s-l1600.jpg',
			'price' => 2585.90
       	]);

       	DB::table('products')->insert([
       		'name' => 'Bluedio Fi Bluetooth ',
       		'description' => 'Earphones Wireless Headphones TV Waterproof Stereo Headphones',
			'photo' => 'https://i.ebayimg.com/images/g/-rcAAOSwxKxei~Pp/s-l1600.jpg',
			'price' => 2379.15
       	]);

       	DB::table('products')->insert([
       		'name' => 'Nintendo Switch Animal Crossing',
       		'description' => 'ike new condition. Open box. Note: this is a Multi variation listing. Meaning it has several buying options. You may choose the option you like scrolling down the arrow bar.',
			'photo' => 'https://i.ebayimg.com/images/g/Q9EAAOSw0i9emgY8/s-l1600.png',
			'price' => 9295.70
       	]);

       	DB::table('products')->insert([
       		'name' => 'PSVR PS4 Pro Slim',
       		'description' => 'Keep your Console and Accessories Organized with the most complete VR display and charge solution available.',
			'photo' => 'https://i.ebayimg.com/images/g/8oAAAOSwydpd9KbT/s-l1600.jpg',
			'price' => 3569.09
       	]);
    }
}
