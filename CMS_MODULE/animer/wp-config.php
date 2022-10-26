<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db-dump' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'N4YbwfN97V:Us/QlTo_r>dfGZ_c9i,4E0KzT4/T2w<zA2: +r1;K6]3>E&lhk qC' );
define( 'SECURE_AUTH_KEY',  'V~7d;htSB~`L0C5H{g.9-u^/Pv[1!5rAG;iVzKsDQ_/tlYMYcz$I[@(R_[cOIYP@' );
define( 'LOGGED_IN_KEY',    'Y1PiYYHxurnJ S_6ZO}V:q_NYOGs{X5,C7(h}F),Rq +.UBfSdBgHN|l(S7xH>ec' );
define( 'NONCE_KEY',        'qauLu+ZxDmKbLQ&rl${WUr$a<?gk(#`7Z/-Bqok7+aHqqicTxvk,GH``IbKvZQQJ' );
define( 'AUTH_SALT',        'dTwtBa$|4`Xw>&do^m^4m.R^-1QtWuy+)Rr]A2^SA^44&%Z/r35UdrCGY]!K^v:r' );
define( 'SECURE_AUTH_SALT', 'CYinfV2#lc&Mn!Zf}A2Ns=1-#%bnF>R)*jP:y0KPUJGtjr-E[pN*H<P>eLk>^Xfb' );
define( 'LOGGED_IN_SALT',   'c3!^~PSxpb5D+8d~JI>@KuZJknI//yhx3^G6<2Q*FFBM|JtoNW,*?|>r_V3%/,T[' );
define( 'NONCE_SALT',       ')oPXnzkQ=u|`UOY;E<F^7VDxw4{aE* LLUX+ow#BW$O[Q#9Lk2c|!#_&s[V)#@dD' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'an_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
