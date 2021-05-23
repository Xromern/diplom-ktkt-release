FROM php:7.2-fpm

RUN apt-get update && apt-get install -y --no-install-recommends \
		libfreetype6-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
		libmemcached-dev zlib1g-dev \
		libmagickwand-dev \
    		libmagickcore-dev \
		libc-client-dev \
		libkrb5-dev \
	&& docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
	&& docker-php-ext-configure imap --with-kerberos --with-imap-ssl \
	&& docker-php-ext-install -j$(nproc) imap \
	&& docker-php-ext-install -j$(nproc) gd \
	&& docker-php-ext-install pdo_mysql mysqli zip

COPY wait-for-it.sh /usr/bin/wait-for-it

RUN chmod +x /usr/bin/wait-for-it

#RUN apk --update --no-cache add git

RUN docker-php-ext-install pdo_mysql
RUN cd /usr/local/etc/php/conf.d/ && \
  echo 'memory_limit = -1' >> /usr/local/etc/php/conf.d/docker-php-memlimit.ini

COPY --from=composer:1.4 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
CMD composer install ;wait-for-it database:3306 -- bin/console doctrine:migrations:migrate ; php-fpm
#CMD bin/console ckeditor:install

EXPOSE 9000
