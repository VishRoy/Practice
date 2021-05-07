# Write your MySQL query statement below
select Name as Customers from Customers as c where not exists(select Id from Orders where Orders.CustomerId = c.Id)