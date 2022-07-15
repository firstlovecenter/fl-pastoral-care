// Set all members to Sheep

MATCH (service {id: $recordId})
      WHERE service:ServiceRecord OR service:BussingRecord

      UNWIND $presentMembers AS presentMemberId
      MATCH (present:Member {id: presentMemberId})
      MERGE (present)-[:ATTENDED_SERVICE]->(service)

      RETURN service;




