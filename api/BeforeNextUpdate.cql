//Set all members to Sheep
MATCH (member:Member)
SET member:Sheep
RETURN COUNT(member);

