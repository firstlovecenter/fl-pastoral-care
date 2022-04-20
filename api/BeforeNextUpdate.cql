MATCH (member:Member)
SET member:Sheep
RETURN COUNT(member);

