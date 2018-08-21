<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'nm317066_db');

/** MySQL database username */
define('DB_USER', 'nm317066_db');

/** MySQL database password */
define('DB_PASSWORD', 'JuHTsKeJ');

/** MySQL hostname */
define('DB_HOST', 'nm317066.mysql.tools');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Nf0sj~jpBrnOQrek6$HfE>NvLh^RN)^$hcVZ=Z3-+Or~jZ8#q>:VRM[9NdG)axbp');
define('SECURE_AUTH_KEY',  'x=D<E)fXy&Z;{X1]isc9ua<6wRb{UrUb`M5QZN.PQei@)K$EXPzZVrv1>ue=07%I');
define('LOGGED_IN_KEY',    ':aspY:<x:z=]545^0YO1r)&ql)%LGO@LkL1=|v~DN,Z5`wT<G`?6jbC-^{_c>:-.');
define('NONCE_KEY',        'M&>!gJl75S.!Pk=Ut&YAPSe8^_gE<X`O^MT>1DmP6wDYh5y<Z|4XWzrN]*,L{uAY');
define('AUTH_SALT',        'wC.@9zKBk$^v8[4Ai<VK7[S^_%!}[<v0b8hN+nPcUu2a8/7]8>6Zh99*&MTI!CqK');
define('SECURE_AUTH_SALT', '7*^!%{xr@HL_1I^xPwkW$llw<l!oSG9AL2 ?$s<$3jB<}Zag+biwWIkzV&^A&}M*');
define('LOGGED_IN_SALT',   'b}u5IvdjA2F3.QdgVUqgDhNFi+!]UV}kt:O2,G<gZ6GL=a%[{hu&[BoJN#Me4p#;');
define('NONCE_SALT',       '3BWrw>peEFi%ty;>M^cxLmDlqb345~eDOr}ugjra7@Mt>LEN?|O6MgDn@luG/3[I');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');


/*увеличиваем память*/
//define('WP_MEMORY_LIMIT', '256M');
