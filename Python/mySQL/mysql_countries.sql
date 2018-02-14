SELECT countries.name, languages.language, languages.percentage
FROM countries
LEFT JOIN languages ON countries.id = languages.country_id
WHERE languages.language = "slovene"
ORDER BY languages.percentage DESC;

SELECT countries.name, count(cities.id)
FROM countries
LEFT JOIN cities ON cities.country_id = countries.id
GROUP BY countries.name
ORDER BY count(cities.id) DESC;

SELECT cities.name, cities.population
FROM countries
LEFT JOIN cities ON cities.country_id = countries.id
WHERE countries.name = "Mexico" AND cities.population > 500000
ORDER BY cities.population DESC;

SELECT countries.name, languages.language, languages.percentage
FROM countries
LEFT JOIN languages ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;

SELECT countries.name, countries.surface_area, countries.population
FROM countries
WHERE countries.surface_area < 501 AND countries.population > 100000;

SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy
FROM countries
WHERE countries.government_form LIKE "Constitutional Monarchy"
AND countries.capital > 200 AND countries.life_expectancy > 75;

SELECT countries.name, cities.name, cities.district, cities.population
FROM countries
LEFT JOIN cities ON countries.id = cities.country_id
WHERE countries.name LIKE "Argentina" AND cities.district LIKE "Buenos Aires"
AND cities.population > 500000;

SELECT countries.region, count(countries.id)
FROM countries
GROUP BY countries.region;
