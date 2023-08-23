# frozen_string_literal: true
require './resource_connection'
require 'pry'
class HandleResourceConnections

  def initialize(max_open_conn)
    @max_open_conn = max_open_conn
  end
  def get_resource_conn(res_collection)

    #  validate if there are any open res ( res.closed = nil)
    #   if yes --> return exception
    # else
    #   create new conn


    open_resources = res_collection.select { |r| r.closed.nil? }
    if @max_open_conn > open_resources.length || res_collection.empty?
      res = ResourceConnection.new
      res.open
      res
    else
      raise 'max open connections'

    end

  end

  def release_resource_con(resource)
    resource.close
  end
end

# handler = HandleResourceConnections.new(3)
#
# conns = handler.get_resource_conn({})
# handler.release_resource_con(conns)
# # puts conns.closed

#requ:
# to have single class instance