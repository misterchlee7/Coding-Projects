SELECT MONTHNAME(charged_datetime) AS month, sum(amount) AS revenue
FROM billing
WHERE charged_datetime LIKE "2012-03%";

SELECT clients.client_id, sum(billing.amount) AS revenue
FROM clients
LEFT JOIN billing ON clients.client_id = billing.client_id
WHERE clients.client_id = 2;

SELECT clients.client_id, sites.domain_name
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = 10;

SELECT clients.client_id, sites.domain_name, MONTHNAME(sites.created_datetime) AS month, YEAR(sites.created_datetime)
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = 1
ORDER BY YEAR(sites.created_datetime);

SELECT count(leads.site_id), leads.registered_datetime
FROM leads
WHERE leads.registered_datetime between "2011-01-01 00:00:00" and "2011-02-15 23:59:59"
GROUP BY(leads.registered_datetime);

SELECT CONCAT(clients.first_name," ",clients.last_name) AS client_name, count(leads.leads_id) AS number_of_leads, leads.registered_datetime AS generated_date
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
LEFT JOIN leads ON leads.site_id = sites.site_id
WHERE leads.registered_datetime between "2011-01-01 00:00:00" and "2011-12-31 23:59:59"
GROUP BY(client_name);

SELECT CONCAT(clients.first_name," ",clients.last_name) AS client_name, count(leads.leads_id) AS num_of_leads, MONTH(leads.registered_datetime) AS month_generated, YEAR(leads.registered_datetime) AS year_generated
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
LEFT JOIN leads ON leads.site_id = sites.site_id
WHERE YEAR(leads.registered_datetime) = "2011"
AND MONTH(leads.registered_datetime) between "01" and "06"
GROUP BY leads.leads_id
ORDER BY MONTH(leads.registered_datetime) ASC;

SELECT clients.client_id AS client_id, CONCAT(clients.first_name," ",clients.last_name) AS client_name, sites.domain_name, count(leads.leads_id) AS num_of_leads, leads.registered_datetime AS generated_date
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
LEFT JOIN leads ON leads.site_id = sites.site_id
WHERE leads.registered_datetime BETWEEN "2011-01-01 00:00:00" AND "2011-12-31 23:59:59"
GROUP BY(sites.domain_name)
ORDER BY clients.client_id;

SELECT clients.client_id AS client_id, CONCAT(clients.first_name," ",clients.last_name) AS client_name, sites.domain_name, count(leads.leads_id) AS num_of_leads, leads.registered_datetime AS generated_date
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
LEFT JOIN leads ON leads.site_id = sites.site_id
GROUP BY(sites.domain_name)
ORDER BY clients.client_id;

SELECT clients.client_id AS client_id, CONCAT(clients.first_name," ",clients.last_name) AS client_name, billing.amount, MONTHNAME(billing.charged_datetime) AS month_charged, YEAR(billing.charged_datetime) AS year_charged
FROM clients
LEFT JOIN billing ON clients.client_id = billing.client_id
GROUP BY clients.client_id, month_charged, year_charged
ORDER BY clients.client_id ASC, billing.charged_datetime ASC;

SELECT CONCAT(clients.first_name," ",clients.last_name) AS client_name, group_concat(" ",sites.domain_name)
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
GROUP BY client_name;