# First insert values into users AND insert values into friendships

SELECT users.first_name AS first_name, users.last_name AS last_name, users2.first_name AS friend_first_name, users2.last_name AS friend_last_name
FROM users
LEFT JOIN friendships ON friendships.users_id = users.id
LEFT JOIN users AS users2 ON friendships.users_id1 = users2.id
ORDER BY users2.last_name DESC;